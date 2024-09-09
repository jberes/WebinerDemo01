import { useCallback, useEffect, useState } from 'react';
import { CustomersType } from '../models/Northwind/customers-type';
import { EmployeesType } from '../models/Northwind/employees-type';
import { getCustomers, getEmployees, getOrders, getSuppliers } from '../services/northwind';
import { OrdersType } from '../models/Northwind/orders-type';
import { SuppliersType } from '../models/Northwind/suppliers-type';

export const useGetOrders = () => {
  const [orders, setOrders] = useState<OrdersType[]>([]);

  const requestOrders = useCallback(() => {
    let ignore = false;
    getOrders()
      .then((data) => {
        if (!ignore) {
          setOrders(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestOrders();
  }, [requestOrders]);

  return { requestNorthwindOrders: requestOrders, northwindOrders: orders, setNorthwindOrders: setOrders };
}

export const useGetCustomers = () => {
  const [customers, setCustomers] = useState<CustomersType[]>([]);

  const requestCustomers = useCallback(() => {
    let ignore = false;
    getCustomers()
      .then((data) => {
        if (!ignore) {
          setCustomers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomers();
  }, [requestCustomers]);

  return { requestNorthwindCustomers: requestCustomers, northwindCustomers: customers, setNorthwindCustomers: setCustomers };
}

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<EmployeesType[]>([]);

  const requestEmployees = useCallback(() => {
    let ignore = false;
    getEmployees()
      .then((data) => {
        if (!ignore) {
          setEmployees(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployees();
  }, [requestEmployees]);

  return { requestNorthwindEmployees: requestEmployees, northwindEmployees: employees, setNorthwindEmployees: setEmployees };
}

export const useGetSuppliers = () => {
  const [suppliers, setSuppliers] = useState<SuppliersType[]>([]);

  const requestSuppliers = useCallback(() => {
    let ignore = false;
    getSuppliers()
      .then((data) => {
        if (!ignore) {
          setSuppliers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSuppliers();
  }, [requestSuppliers]);

  return { requestNorthwindSuppliers: requestSuppliers, northwindSuppliers: suppliers, setNorthwindSuppliers: setSuppliers };
}
