import { useFormik } from "formik";
import Modal from "./Modal";
import { v4 } from "uuid";
import { formInputs } from "./../../constants/index";
import { form_schema } from "./schema";

const FormModal = ({ isModalOpen, close, setStores, editItem, cities }) => {
  const value = editItem
    ? editItem
    : {
        name: "",
        country: "",
        city: "",
        adress: "",
        phone: "",
        discount_rate: "",
        premium_rate: "",
        description: "",
      };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: value,

    validationSchema: form_schema,

    onSubmit: (values, actions) => {
      if (editItem) {
        setStores((stores) =>
          stores.map((i) =>
            i.id === editItem.id ? { ...editItem, ...values } : i
          )
        );
      } else {
        setStores((stores) => [...stores, { id: v4(), ...values }]);
      }

      actions.resetForm();
      close();
    },
  });

  return (
    <Modal isModalOpen={isModalOpen} close={close}>
      <form onSubmit={formik.handleSubmit}>
        <h3 className="font-bold text-lg">
          {editItem ? "Edit Store" : "Add New Store"}
        </h3>
        <div className="flex flex-col gap-8 my-5">
          {formInputs.map((item) => (
            <div className="pb-2">
              <input
                name={item.name}
                type={item.type}
                placeholder={item.name}
                className=" shadow  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[item.name]}
              />
              {formik.errors[item.name] && formik.touched[item.name] && (
                <p className="absolute text-red-600">
                  {formik.errors[item.name]}
                </p>
              )}
            </div>
          ))}

          <div className="pb-2">
            <input
              name="city"
              list="cities"
              type="text"
              placeholder="city"
              className="shadow  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={formik.handleChange}
              value={formik.values.city}
            />

            {formik.errors["city"] && formik.touched["city"] && (
              <p className="absolute text-red-600">{formik.errors["city"]}</p>
            )}

            <datalist id="cities">
              {cities.map((city) => (
                <option value={city} />
              ))}
            </datalist>
          </div>

          <div className="pb-2">
            <textarea
              name="description"
              placeholder="description"
              className="max-h-[400px] shadow  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.errors["description"] && formik.touched["description"] && (
              <p className="absolute text-red-600">
                {formik.errors["description"]}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {editItem ? "Save Changes" : "Add"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FormModal;
