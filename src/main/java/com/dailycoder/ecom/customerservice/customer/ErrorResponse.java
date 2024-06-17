package com.dailycoder.ecom.customerservice.customer;

import java.util.Map;

public record ErrorResponse(
        Map<String,String> errors
) {
}
