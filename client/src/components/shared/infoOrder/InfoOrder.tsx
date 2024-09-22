"use client";

import { useState, useEffect } from "react";
import classes from "./InfoOrder.module.css";
import { IInfoOrder } from "@/types/type";
import { useParams, useRouter } from "next/navigation";
import orderService from "@/shared/service/order-service";
import RenderPhrase from "@/lib/getProductWordEnding";
const InfoOrder = () => {
  const router = useRouter();
  const { id } = useParams();

  const [orderData, setOrderData] = useState<IInfoOrder | null>(null);

  const fetchOrderData = async () => {
    if (id) {
      try {
        const response = await orderService.getInfoOrder(String(id));
        setOrderData(response);
      } catch (error) {
        console.error("Ошибка при получении данных о заказе:", error);
      }
    }
  };
  useEffect(() => {
    fetchOrderData();
  }, [id]);

  return (
    orderData && (
      <div className={classes.InformationAboutOrder}>
        <p className={classes.BackToOrder} onClick={router.back}>
          Назад
        </p>

        <p className={classes.titleOrder}>Информация о заказе </p>
        <div className={classes.orderBlock}>
          <p className={classes.orderBlock__numberOrder}>
            Номер заказа:{" "}
            <span className={classes.orderBlock__valueOrder}>
              {orderData.id_order}
            </span>{" "}
          </p>
          <p className={classes.orderBlock__name}>
            Имя:{" "}
            <span className={classes.orderBlock__value}>{orderData.name}</span>{" "}
          </p>
          <p className={classes.orderBlock__surname}>
            Фамилия:{" "}
            <span className={classes.orderBlock__value}>
              {orderData.surname}
            </span>{" "}
          </p>
          <p className={classes.orderBlock__phone}>
            Номер:{" "}
            <span className={classes.orderBlock__value}>
              {orderData.number}
            </span>{" "}
          </p>
          <p className={classes.orderBlock__address}>
            Адрес:{" "}
            <span className={classes.orderBlock__value}>
              {orderData.address}
            </span>{" "}
          </p>
          <p className={classes.orderBlock__amountProduct}>
            {orderData.allCount} {RenderPhrase(orderData.allCount)}
          </p>

          <div className={classes.orderBlock__products}>
            {orderData.info.map((product) => (
              <div
                key={product.id_equipment}
                className={classes.orderBlock__productInfo}
              >
                <p className={classes.orderBlock__nameProduct}>
                  {product.equipment.brand} {product.equipment.model}
                </p>
                <p className={classes.orderBlock__quaintityProduct}>
                  {product.count}{" "}
                  <span className={classes.orderBlock__Shtuki}>шт.</span>
                </p>
                <p className={classes.orderBlock__price}>
                  {product.equipment.price.toLocaleString("ru-RU")}{" "}
                  <span className={classes.rub}>₽</span>
                </p>
              </div>
            ))}
          </div>

          <div className={classes.orderBlock__totalPrice}>
            <p className={classes.orderBlock__tPrice}>
              Стоимость:{" "}
              <span className={classes.orderBlock__tValue}>
                {orderData.price.toLocaleString("ru-RU")}
              </span>
              <span className={classes.orderBlock__trub}> ₽</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoOrder;
