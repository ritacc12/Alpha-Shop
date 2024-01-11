import { createContext } from "react";

export const CartContext = createContext();

export const initialList = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

/* {/* function tasksReducer(draft, action) {
    switch (action.type) {
      case "added": {
        const productId = action.id;
        const targetItem = draft.find((item) => item.id === productId);
        targetItem.quantity++;
        let totalAmount = 0;
        draft.forEach((item) => {
          if (item.id !== "total") {
            totalAmount += item.quantity * item.price;
          }
        });

        const newTotal = draft.find((item) => item.id === "total");
        newTotal.totalAmount = totalAmount;
        break;
      }
      case "decreased": {
        const productId = action.id;

        const targetItem = draft.find((item) => item.id === productId);
        targetItem.quantity--;

        let totalPrice = 0;
        draft.forEach((item) => {
          if (item.id !== "total") {
            totalAmount += item.quantity * item.price;
          }
        });

        const newTotal = draft.find((item) => item.id === "total");
        newTotal.totalAmount = totalAmount;
        break;
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }}; */
