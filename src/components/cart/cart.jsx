/* eslint-disable react/prop-types */
export function Cart({ cartItems = [] }) {
  return (
    <>
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="mb-2 flex justify-between items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <button className="text-red-500">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
