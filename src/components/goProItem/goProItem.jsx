// export const GoProItem = (data) => {
//   console.log(data);
//   return (
//     <li>
//       <h3>{data.info.name}</h3>
//       <p>{data.info.price}</p>
//       <img src={data.info.image} alt={data.info.name} />
//       <p>{data.info.description}</p>
//     </li>
//   );
// };

// Деструктуризуємо дані props

export const GoProItem = ({ info, test }) => {
  console.log(test);
  const { name, price, image, description } = info;
  return (
    <li>
      <h3>{name}</h3>
      <p>{price}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
    </li>
  );
};

import PropTypes from "prop-types";

GoProItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
  test: PropTypes.number,
};
