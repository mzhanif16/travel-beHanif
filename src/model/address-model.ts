import {Address, User} from "@prisma/client";
import {toUserResponse, UserResponse} from "./user-model";

export type AddressResponse = {
    id: string
    street?: string | null;
    city?: string | null;
    province?: string | null;
    country: string
    postal_code: string
    user?: UserResponse
}

export type CreateAddressRequest = {
    userId: string;
    street?: string;
    city?: string;
    province?: string;
    country: string;
    postal_code: string;
}

export function toAddressResponse(address: Address): AddressResponse {
    return {
        id: address.id,
        street: address.street,
        city: address.city,
        province:address.province,
        country:address.country,
        postal_code:address.postal_code
    }
}

export function toAddressUserResponse(address: Address & { user: User }): AddressResponse {
    return {
        id: address.id,
        street: address.street ?? null,
        city: address.city?? null,
        province:address.province?? null,
        country:address.country,
        postal_code:address.postal_code,
        user: toUserResponse(address.user)
    }
}