package com.dailycoder.ecom.customerservice.customer;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document
@Builder
public class Customer {

    @Id
    private String Id;
    private String fistName;
    private String lastName;
    private String email;
    private Address address;
}
