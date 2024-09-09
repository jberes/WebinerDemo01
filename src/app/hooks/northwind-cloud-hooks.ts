import { useCallback, useEffect, useState } from 'react';
import { Customer } from '../models/NorthwindCloud/customer';
import { CustomerOrdersResult } from '../models/NorthwindCloud/customer-orders-result';
import { getCustomerList, getCustomerOrdersResultList } from '../services/northwind-cloud';

export const useGetCustomerList = () => {
  const [customer, setCustomer] = useState<Customer[]>([]);

  const requestCustomer = useCallback(() => {
    let ignore = false;
    getCustomerList()
      .then((data) => {
        if (!ignore) {
          setCustomer(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomer();
  }, [requestCustomer]);

  return { requestNorthwindCloudCustomer: requestCustomer, northwindCloudCustomer: customer, setNorthwindCloudCustomer: setCustomer };
}

export const useGetCustomerOrdersResultList = (customerId: any) => {
  const [customerOrdersResult, setCustomerOrdersResult] = useState<CustomerOrdersResult[]>([]);

  const requestCustomerOrdersResult = useCallback(() => {
    let ignore = false;
    getCustomerOrdersResultList(customerId)
      .then((data) => {
        if (!ignore) {
          setCustomerOrdersResult(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [customerId]);

  useEffect(() => {
    requestCustomerOrdersResult();
  }, [customerId, requestCustomerOrdersResult]);

  return { requestNorthwindCloudCustomerOrdersResult: requestCustomerOrdersResult, northwindCloudCustomerOrdersResult: customerOrdersResult, setNorthwindCloudCustomerOrdersResult: setCustomerOrdersResult };
}
