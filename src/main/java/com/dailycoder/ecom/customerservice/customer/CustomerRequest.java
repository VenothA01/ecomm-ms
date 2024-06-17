package com.dailycoder.ecom.customerservice.customer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record CustomerRequest(



        String Id,

        @NotNull(message = "customer first name is required")
        String fistName,

        @NotNull(message = "customer last name is required")
        String lastName,

        @NotNull(message = "customer email is required")
        @Email(message = "customer email is not a valida email")
        String email,


        Address address
) {
}
