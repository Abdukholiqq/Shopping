/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { URL } from "../../App";
import UseInput from "./Input";
import axios from "axios";
import styled from "styled-components";
const Input = styled.input`
  height: 78px;
  width: 400px;
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #c9cfd8;
  outline: none;
  @media screen and (max-width: 430px) {
    width: 330px;
  }
  @media screen and (max-width: 361px) {
    width: 300px;
  }
`;

const Form = () => {
  const access_token = localStorage.getItem("token");
  const obj = {
    productName: "",
    model: "",
    price: "",
    color: "",
    count: "",
    nfc: "",
    ekran_chastotasi: "",
    protsessor: "",
    old_kamera: "",
    orqa_kamera: "",
    sim_karta_formati: "",
    sim_kartalar_soni: "",
    operatsion_system_version: "",
    aloqa_standarti: "",
    bluetooth_standarti: "",
    vazn: "",
    batary_power: "",
    ekran_nisbati: "",
    ekran_texnologiyasi: "",
    ekran_size: "",
    doimiy_xotira: "",
    operativ_xotira: "",
    description: "",
  };
  const [categories, setCategories] = useState([]);
  const { value, changeValue } = UseInput(obj);
  const [selectedFilesF, setSelectedFilesF] = useState("");
  const [selectedFilesB, setSelectedFilesB] = useState(""); 
  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(URL + `api/category`);
      setCategories(res.data.data);
    };
    fn();
  }, []);
  const handleFileChangeF = (event) => {
    const fileFront = event.target.files[0];
    setSelectedFilesF(fileFront);
  };
  const handleFileChangeB = (e) => {
    const fileBack = e.target.files[0];
    setSelectedFilesB(fileBack);
  };
  const submit = () => {
    const files = new FormData();
    files.append("fileFront", selectedFilesF);
    files.append("fileBack", selectedFilesB);
    // for all input
    files.append("productName", value.productName);
    files.append("model", value.model);
    files.append("price", value.price);
    files.append("color", value.color);
    files.append("count", value.count);
    files.append("nfc", value.nfc);
    files.append("ekran_chastotasi", value.ekran_chastotasi);
    files.append("protsessor", value.protsessor);
    files.append("old_kamera", value.old_kamera);
    files.append("orqa_kamera", value.orqa_kamera);
    files.append("sim_karta_formati", value.sim_karta_formati);
    files.append("sim_kartalar_soni", value.sim_kartalar_soni);
    files.append("operatsion_system_version", value.operatsion_system_version);
    files.append("aloqa_standarti", value.aloqa_standarti);
    files.append("bluetooth_standarti", value.bluetooth_standarti);
    files.append("vazn", value.vazn);
    files.append("batary_power", value.batary_power);
    files.append("ekran_nisbati", value.ekran_nisbati);
    files.append("ekran_texnologiyasi", value.ekran_texnologiyasi);
    files.append("ekran_size", value.ekran_size);
    files.append("doimiy_xotira", value.doimiy_xotira);
    files.append("operativ_xotira", value.operativ_xotira);
    files.append("description", value.description);

    axios
      .post(`${URL}api/products`, files, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) { 
        return error;
      });
    alert("mahsulot qo'shildi");
    window.location.reload();
  };
  return (
    <div className="container">
      <form
        method="POST"
        required
        className="postForm container d-flex flex-wrap w-75 justify-content-between p-2"
      >
        <h3>You can add a new product here</h3>
        <div className="d-flex flex-wrap justify-content-between p-2">
          <div className="w-25 btn d-flex flex-column">
            <label htmlFor="select">Please select Brand name</label>
            <select name="model" id="select" onChange={changeValue}>
              {categories.map((item) => {
                return (
                  <option key={item.id} value={item.category_name}>
                    {item.category_name}
                  </option>
                );
              })}
            </select>
          </div>

          <Input
            type="text"
            placeholder="Product name"
            name="productName"
            onChange={changeValue}
            id="ProductName"
          />
          <Input
            type="number"
            placeholder="Product price"
            name="price"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder={"Product color"}
            name="color"
            onChange={changeValue}
          />
          <Input
            required
            type="number"
            placeholder="Product Count"
            name="count"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Protsessor"
            name="protsessor"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Doimiy xotira"
            name="doimiy_xotira"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Operativ xotira"
            name="operativ_xotira"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Og'irligi"
            name="vazn"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Batareya quvvati"
            name="batary_power"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Old kamera MPk"
            name="old_kamera"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Orqakamera"
            name="orqa_kamera"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="SIM KARTA formati"
            name="sim_karta_formati"
            onChange={changeValue}
          />
          <Input
            type="number"
            placeholder="SIM KARTA lar soni"
            name="sim_kartalar_soni"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Operatsion Sistema versiyasi"
            name="operatsion_system_version"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Aloqa standarti"
            name="aloqa_standarti"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Bluetooth Standarti"
            name="bluetooth_standarti"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="NFC Bor Yoki Yo'q"
            name="nfc"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Ekran chastotasi"
            name="ekran_chastotasi"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Ekran Nisbati"
            name="ekran_nisbati"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Ekran texnologiyasi"
            name="ekran_texnologiyasi"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Ekran o'lchamlari"
            name="ekran_size"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="Mahsulot tavsifi"
            name="description"
            onChange={changeValue}
          />
          <div className="d-flex flex-column">
            <label htmlFor="files" className="text-start ps-2">
              Choose Front of the phone
            </label>
            <Input
              type="file"
              onChange={handleFileChangeF}
              name="fileFront"
              id="files"
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="fileBack" className="text-start ps-2">
              Choose Back of the phone
            </label>
            <Input
              type="file"
              onChange={handleFileChangeB}
              name="fileBack"
              id="fileBack"
            />
          </div>
        </div>
      </form>
      <button
        onClick={(e) => submit()}
        className="btn bg-primary mb-5 text-white"
      >
        Add new product
      </button>
    </div>
  );
};
export default Form;
