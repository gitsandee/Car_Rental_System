import React, { useState, useEffect } from "react";
import { get, post } from "./Requests";
import { useNavigate } from "react-router-dom"

export const Form = ({ form, initialFormDetails = {}, isUpdateForm = false, onUpdateSubmit = () => { }, onCancel = () => { } }) => {
  const navigate = useNavigate()
  const [typesFieldsMapper, setTypesFieldsMapper] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  useEffect(() => onLoad(), []);

  const title = form.name;

  console.log(form);

  const onLoad = () => {
    get(
      "formTypes",
      (props) => {
        console.log(props);
        setTypesFieldsMapper(props.data);
        setIsLoading(false);
      },
      (err) => console.log(err)
    );
  };

  const onCreateSubmit = () => {
    const id = `${Math.round(Math.random() * 100000000)}`
    const data = { _id: id, formType: title, formDetails: formDetails };
    console.log(data);
    post("formSubmissions", data)
    console.log('redirect to confirm')
    navigate(`/confirmDetails/${id}`)
  };

  const onSubmit = () => {

  }

  async function onChange(field, e) {
    console.log({ formDetails })
    console.log('onChange')
    setIsLoading(true)
    setFormDetails((formDetails) => {
      const oldDetails = formDetails;
      oldDetails[field] = e.target.value;
      return oldDetails;
    });
    setIsLoading(false)
  }

  if (isLoading) {
    <>Loading...</>;
  }

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        width: "50%",
        margin: 20,
        padding: 10,
        zIndex: 100,
      }}
    >
      {/* {title} */}

      <div style={{ padding: 5 }}>
        {typesFieldsMapper
          .filter((type) => type.name === form.name)[0]
          ?.fields.map((row) => (
            <div style={{ display: "flex", padding: 5 }}>
              {row.map((f) => {
                const field = f.name;

                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 10,
                      backgroundColor: "transparent",
                    }}
                  >
                    <label
                      style={{
                        padding: 5,
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >{`${field} : `}</label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      {f.type === "select" ? (
                        <select
                          key={field}
                          value={formDetails[field]}
                          style={{ width: 300 }}
                          onChange={(e) => onChange(field, e)}
                        >
                          <option disabled selected value="">
                            -- select an option --
                          </option>
                          {f.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          key={field}
                          type={f.type}
                          style={{ width: 300 }}
                          defaultValue={formDetails[field]}
                          onChange={(e) =>
                            setFormDetails((formDetails) => {
                              const oldDetails = formDetails;
                              oldDetails[field] = e.target.value;
                              return oldDetails;
                            })
                          }
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {isUpdateForm ?
          <>
            <button
              style={{
                padding: 10,
                fontWeight: "bold",
              }}
              onClick={() => { onCancel(); onLoad() }}
            >
              cancel
            </button>
            <button
              style={{
                padding: 10,
                fontWeight: "bold",
              }}
              onClick={() => { onUpdateSubmit(formDetails); onLoad() }}
            >
              update
            </button>
            <button style={{
              padding: 10,
              fontWeight: "bold",
            }}
              onClick={onSubmit}>
              submit
            </button>
          </>

          : <button
            style={{
              padding: 10,
              fontWeight: "bold",
            }}
            onClick={onCreateSubmit}
          >
            submit
          </button>
        }

      </div>
    </div>
  );
};
