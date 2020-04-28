import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import DashboardPageLayout from '../layout/DashboardPageLayout';
import { URL_API } from '../utils/constants';
// import { useDispatch } from 'react-redux';
import useAxios from '../hooks/useAxios.js';

export default function Home() {
  const { Content } = Layout;
  const [idPokemon, setIdPokemon] = useState();
  const [
    idPokemonFromEnter,
    setIdPokemonFromEnter,
  ] = useState(null);
  const [isFromEnter, setIsFromEnter] = useState(false);

  // const dispatch = useDispatch();
  // const getDataConfigurationUserFamily = (state) => {
  //   dispatch(getDataConfigurationUserFamilyActions(state));
  // };

  const onChange = (e) => {
    setIdPokemon(e.target.value);
    e.target.value === idPokemonFromEnter
      ? setIsFromEnter(true)
      : setIsFromEnter(false);
  };

  const onEnter = () => {
    // getDataConfigurationUserFamily(idPokemon);
    setIdPokemonFromEnter(idPokemon ? idPokemon : 0);
    setIsFromEnter(true);
  };

  return (
    <DashboardPageLayout>
      <Content
        style={{
          backgroundColor: '#fff',
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <div>Ingrese número de pokemon a buscar</div>
        <Input
          placeholder="Ingrese datos"
          onPressEnter={onEnter}
          onChange={onChange}
        />
        {isFromEnter && (
          <Pokemon idPokemon={idPokemonFromEnter} />
        )}
      </Content>
    </DashboardPageLayout>
  );
}

function Pokemon(props) {
  const { idPokemon } = props;
  const [{ isLoading, result, error }] = useAxios(
    `${URL_API}pokemon/${idPokemon}`,
  );

  if (isLoading || !result) {
    return error ? (
      <div>sucedio un error...</div>
    ) : (
      <div> loadging ...</div>
    );
  }

  return <ShowInfo result={result} />;
}

function ShowInfo(props) {
  const {
    result: { id, name, sprites },
  } = props;

  return (
    <div>
      <p>
        <strong>Id: </strong> {id}
      </p>
      <p>
        <strong>Nombre: </strong> {name}
      </p>
      <img src={sprites.front_default} alt={name}></img>
    </div>
  );
}
