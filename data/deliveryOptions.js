import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption;
}

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export function calculateDeliveryDate(deliveryOption){
  // const today = dayjs();
  // let deliveryDays = deliveryOption.deliveryDays;
  // for(let i=1; i<=deliveryDays; i++){
  //   if(isWeekend(today.add(i, 'days'))){
  //     deliveryDays += 2;
  //     break;
  //   }
  // }
  // let deliveryDate = today.add(
  //   deliveryDays, 'days'
  // );
  // if(isWeekend(deliveryDate)){
  //   deliveryDate = deliveryDate.add(2, 'days')
  // }
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0){
    deliveryDate = deliveryDate.add(1, 'd');

    if (!isWeekend(deliveryDate)){
      remainingDays--;
    }
  }

  return deliveryDate.format('dddd, MMMM D')
}

