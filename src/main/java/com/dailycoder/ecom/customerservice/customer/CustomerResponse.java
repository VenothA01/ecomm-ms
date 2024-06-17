package com.dailycoder.ecom.customerservice.customer;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record CustomerResponse(
        String Id,
        String fistName,
        String lastName,
        String email,
        Address address
) {
}
