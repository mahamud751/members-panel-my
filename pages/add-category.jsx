import axios from "axios";
import { useState, useEffect } from "react";
import useScript from "../commonFunction/ReloadJs";
const AddCategory = (props) => {
  useScript("/assets/js/app.js");

  console.log(props)
  const [name, updateDate] = useState({
    title: "",
    desktopicon: "",
    mobileicon: "",
  });

  // subcategory useState 
  const [subcategory, setSubcategory] = useState({
    categoryId: "",
    title: "",
    desktopicon: "",
    mobileicon: "",
  });

  // brand useState 
  const [brand, setBrand] = useState({
    categoryId: "",
    subId: "",
    title: "",
    desktopicon: "",
    mobileicon: "",
  });

  // for subcategory
  const [fetchCategoryData, setFetchCategoryData] = useState([]);

  // for brand
  const [fetchBrandData, setfetchBrandData] = useState([]);

  // subcategory handle change
  const subcategoryHandleChange = (e) => {
    setSubcategory({ ...subcategory, [e.target.name]: e.target.value });
  };

  const subcategoryHandleSubmit = async (e) => {
    console.log(subcategory);
    e.preventDefault();
    try {
      const response = await axios.post("https://baybridgebd.com/AddCategorySub", subcategory)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })

    } catch (error) {
      console.log(error);
    }
  };
  // End subcategory

  // brand handle change
  const brandHandleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  const brandHandleSubmit = async (e) => {
    console.log(brand);
    e.preventDefault();
    try {
      const response = await axios.post("https://baybridgebd.com/AddCategoryBrand", brand)
        .then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })

    } catch (error) {
      console.log(error);
    }
  };
  // End brand

  const onChanges = (e) => {
    const { name, value } = e.target;
    updateDate((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const subMit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://baybridgebd.com/AddCategory", name);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   return () => {
  //     axios.get("https://baybridgebd.com/GetInformationSingle/Category&chk=1")
  //       .then((response) => {
  //         // console.log(response.data)
  //         setFetchCategoryData(response);
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }, [])


  return (
    <div>
      <div className="row">
        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={subMit} className="form-horizontal" enctype="multipart/form-data">
                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Category name
                  </label>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                    
                      name="title"
                      placeholder="Category name"
                      onChange={onChanges}
                      value={updateDate.title}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="desktopicon" onChange={onChanges} value={updateDate.desktopicon} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="mobileicon" onChange={onChanges} value={updateDate.mobileicon} />
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add sub category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={subcategoryHandleSubmit} className="form-horizontal" enctype="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select id="inputState" name="categoryId" className="form-control">
                    <option selected>Select category</option>
                    {
                      // console.log(fetchCategoryData.data)
                      props.getCatagory.map((item, index) => (
                        <option key={index} value={item.id}> {item.title} </option>
                      ))

                      // fetchCategoryData.data.map((row) => (
                      //   <option key={row.id} value={row.id}> {row.title} </option>
                      // ))

                      // props.getCatagory.map((row) => (
                      //   <option key={row.id} value={row.id}> {row.title} </option>
                      // ))

                    }
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="subcategory">
                    Subcategory name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} value={setSubcategory.title} name="title" placeholder="Sub category name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} value={setSubcategory.desktopicon} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} value={setSubcategory.mobileicon} name="mobileicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-2 m-b-30"></div>

        <div className="col-md-8 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add brand</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={brandHandleSubmit} className="form-horizontal" enctype="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select onChange={brandHandleChange} value={setBrand.categoryId} name="categoryId" className="form-control">
                    <option selected>Select category</option>
                    <option>category 1 </option>
                    <option>category 2</option>
                    <option>category 3</option>
                    <option>category 4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select sub category</label>
                  <select onChange={brandHandleChange} value={setBrand.subId} name="subId" className="form-control">
                    <option selected>Select category</option>
                    <option>sub category 1 </option>
                    <option>sub category 2</option>
                    <option>sub category 3</option>
                    <option>sub category 4</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Brand name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="title" onChange={brandHandleChange} value={setBrand.title} placeholder="Brand name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={brandHandleChange} value={setBrand.desktopicon} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={brandHandleChange} value={setBrand.mobileicon} name="mobileicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps(context) {
//   const { category } = await axios.get("https://baybridgebd.com/GetInformationSingle/Category&chk=1");
//   const { subcategory } = await axios.get("https://baybridgebd.com/GetInformationSingle/CategorySub&chk=1");

//   return {
//     props: { category, subcategory},
//   };
// }

export async function getStaticProps(context) {
	const  {data:getCatagory}  = await axios.get("https://baybridgebd.com/GetInformationSingle/Category&chk=1");
	const { data:getSubCatagory } = await axios.get("https://baybridgebd.com/GetInformationSingle/CategorySub&chk=1");
  return {
    props: { getCatagory,getSubCatagory },
  };
}

export default AddCategory;
