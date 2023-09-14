import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./PaymentStyles";
import { ICONS, PaymentsIcon } from "../../constants/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyByIdentifier } from "../../redux/companies/actions";
import LoginModal from "../../Forms/LoginModal";

const PaymentsWidget = () => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownCompanies = useSelector(
    (state) => state.companies.dropdownCompanies
  );
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
    defaultValues: { IBAN: "" },
  });
  const handleSearch = async (event) => {
    if (isLoggedIn) {
      let identifier = event.target.value;
      if (identifier.length > 2) {
        await dispatch(fetchCompanyByIdentifier(identifier));
        setDropdownVisible(true);
      } else {
        await dispatch(fetchCompanyByIdentifier());
        setDropdownVisible(false);
      }
    } else {
      reset();
      setLoginModalVisible(true);
    }
  };
  const cleanDropdown = async () => {
    await dispatch(fetchCompanyByIdentifier());
    setDropdownVisible(false);
  };

  return (
    <Styled.Wrapper isFirst>
      <Styled.MainInfo>
        <div>
          <PaymentsIcon width="24px" height="24px" />
        </div>
        <b>Payments</b>
      </Styled.MainInfo>
      <form onSubmit={handleSubmit(handleSearch)}>
        <Styled.RequisitesLine widget>
          <Styled.Requisites widget>
            <Styled.Input
              type="text"
              name="IBAN"
              placeholder="UAXXXXXXXXXXXXXXXXXXXXXXX"
              {...register("identifier", { required: true, maxLength: 26 })}
              onChange={handleSearch}
            />
          </Styled.Requisites>
          {dropdownCompanies.length > 0 && (
            <Styled.DropdownMenu visability={isDropdownVisible}>
              {dropdownCompanies.map((company) => (
                <div
                  key={company._id}
                  onClick={() => {
                    cleanDropdown();
                  }}
                >
                  <Styled.DropdownItem
                    key={company._id}
                    to={{
                      pathname: `/payment/${company._id}`,
                    }}
                  >
                    <Styled.Company>
                      {company.companyName}
                      <p> {company.iban}</p>
                    </Styled.Company>
                    <div>
                      <img src={ICONS.RIGHT_ARROW} alt="" />
                    </div>
                  </Styled.DropdownItem>
                </div>
              ))}
            </Styled.DropdownMenu>
          )}
        </Styled.RequisitesLine>
        <Styled.Description>
          IBAN, EDRPOU, account number or owners name
        </Styled.Description>
      </form>
      <LoginModal
        visible={loginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
    </Styled.Wrapper>
  );
};

export default PaymentsWidget;
