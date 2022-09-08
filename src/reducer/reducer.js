// import React from "react";
function reducer(state, { type, payload }) {
  switch (type) {
    case "PENDING": {
      return {
        ...state,
        data: payload,
        limitedData:payload.slice(0,20)
      };
    }
    case "SET_TO_BUSCET": {
      const indexOrder = state.order.findIndex(
        (s) => s.offerId === payload.offerId
      );
      let newMass;
      if (indexOrder < 0) {
        let newOrder = {
          ...payload,
          quantity: 1,
        };
        newMass = [...state.order, newOrder];
      } else {
        newMass = state.order.map((val, idx) => {
          if (idx === indexOrder) {
            return {
              ...val,
              quantity: val.quantity + 1,
            };
          } else {
            return {
              ...val,
            };
          }
        });
      }
      return {
        ...state,
        order: newMass,
      };
    }
    case "PLUS": {
      const indexOrder = state.order.findIndex(
        (s) => s.offerId === payload.offerId
      );
      let newData = state.order.map((val, idx) => {
        if (idx === indexOrder) {
          return {
            ...val,
            quantity: val.quantity + 1,
          };
        } else {
          return {
            ...val,
            quantity: val.quantity,
          };
        }
      });

      return {
        ...state,
        order: newData,
      };
    }
    case "REMOVE": {
      let newData;
      if (payload.quantity > 1) {
        const indexOrder = state.order.findIndex(
          (s) => s.offerId === payload.offerId
        );
        newData = state.order.map((val, idx) => {
          if (idx === indexOrder) {
            return {
              ...val,
              quantity: val.quantity - 1,
            };
          } else {
            return {
              ...val,
              quantity: val.quantity,
            };
          }
        });
      } else {
        newData = state.order.filter((s) => s.offerId !== payload.offerId);
      }
      return {
        ...state,
        order: newData,
      };
    }
    case "CHANGE_STATE":{
      return{
        ...state,
        isOpen:!state.isOpen
      }
    }

    default:
      return state;
  }
}

export default reducer;
