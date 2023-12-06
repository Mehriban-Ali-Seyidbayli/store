import { data } from 'autoprefixer';
import React from 'react';

const TableRow = ({ data, edit, deleteItem }) => {
  return (
    <tr class="bg-white border-b">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {data.name}
      </th>
      <td class="px-6 py-4" title={data.adress}>
        {data.country}/{data.city}
      </td>
      <td class="px-6 py-4">{data.phone}</td>
      <td class="px-6 py-4">{data.discount_rate}</td>
      <td class="px-6 py-4">{data.premium_rate}</td>
      <td class="px-6 py-4 flex gap-2">
        <button
          onClick={() => edit(data)}
          class="font-medium p-2 rounded text-white bg-blue-600 "
        >
          Edit
        </button>
        <button
          onClick={() => deleteItem(data.id)}
          class="font-medium p-2 rounded text-white bg-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
