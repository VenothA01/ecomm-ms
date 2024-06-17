package com.dailycoder.ecom.customerservice.customer;

import java.util.Objects;

public class CustomerMapper {
    public Customer toCustomer(CustomerRequest request) {

        if(Objects.isNull(request))
            return null;

        return Customer.builder().
                fistName(request.fistName()).
                lastName(request.lastName())
                .email(request.email())
                .address(request.address())
                .build();
    }

    public CustomerResponse fromCustomer(Customer customer) {
        if (customer == null) {
            return null;
        }
        return new CustomerResponse(
                customer.getId(),
                customer.getFistName(),
                customer.getLastName(),
                customer.getEmail(),
                customer.getAddress()
        );
    }
}
