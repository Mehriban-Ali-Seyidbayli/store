'use client';

import { useEffect, useState } from 'react';
import FormModal from './components/Modal/FormModal';
import TableRow from './components/TableRow';
import { headings } from './constants';

export default function Home() {
  const [query, setQuery] = useState('');
  const [stores, setStores] = useState([]);
  const [filtredStores, setFiltredStores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [sorting, setSorting] = useState({
    field: 'name',
    ascending: false,
  });


  const deleteItem = (delete_id) => {
    const updated = stores.filter((i) => i.id !== delete_id);
    setStores(updated);
  };

  const cities = stores.map((store) => store.city);


  useEffect(() => {
    const storesCopy = [...stores];

    const sortedStores = storesCopy.sort((a, b) => {
      if (typeof a[sorting.field] === 'string') {
        return a[sorting.field].localeCompare(b[sorting.field]);
      } else {
        return a[sorting.field] - b[sorting.field];
      }
    });


    setStores(
      sorting.ascending ? sortedStores : sortedStores.reverse()
    );
  }, [sorting]);

  useEffect(() => {
    let query_word = query.toLowerCase();

    const filtred = stores.filter((i) =>
      i.name.toLowerCase().includes(query_word)
    );

    setFiltredStores(filtred);
  }, [stores, query]);

  return (
    <main className="min-h-screen py-20 px-5  lg:px-24 bg-primary text-dark-100">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <h2 className="font-bold text-3xl">Stores</h2>
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeHolder="Search By Name"
            type="text"
            className="shadow  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-100 p-2 rounded text-white hover:bg-blue-200"
        >
          New Store
        </button>
      </div>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              {headings.map((item) => (
                <th
                  onClick={() =>
                    setSorting({
                      field: item.value,
                      ascending: !sorting.ascending,
                    })
                  }
                  scope="row"
                  className="px-4 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.label}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtredStores.map((data, i) => (
              <TableRow
                key={i}
                data={data}
                deleteItem={deleteItem}
                edit={(item) => {
                  setIsModalOpen(true);
                  setEditItem(item);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>


      <FormModal
        isModalOpen={isModalOpen}
        setStores={setStores}
        editItem={editItem}
        cities={cities}
        close={() => {
          setIsModalOpen(false);
          setEditItem(null);
        }}
      />
    </main>
  );
}
