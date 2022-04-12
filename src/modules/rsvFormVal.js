const dateError = () => {
 console.log('Invalid date format or invalid day');
};

const checkDate = (dateIn) => {
  const re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!dateIn.match(re)) {
    dateError();
  } else {
    const date = dateIn.split('/');
    const today = [new Date().getMonth()+1, new Date().getDate(), new Date().getFullYear()];
    if (Number(date[2]) < today[2]) {
      dateError();
    } else if (Number(date[2]) === today[2] && Number(date[0]) < today[0] || Number(date[0]) > 12) {
      dateError();
    } else if (Number(date[2]) === today[2] && Number(date[0]) === today[0] && Number(date[1]) < today[1] || Number(date[1]) > 31 ) {
      dateError();
    } else {
      return true;
    }
  }
};

const rsvSubmit = (element) => {
  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const rsvInputs = element.querySelectorAll('input');

    if (checkDate(rsvInputs[1].value) && checkDate(rsvInputs[2].value)) {
      console.log('good');
    } else {
      dateError();
    }
  });
};

export default rsvSubmit;
