/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { ActivityIndicator, FlatList, ImageBackground } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import { ICidadeDados, WeatherService } from '@services/api/Weather';

import UvIcon from '@icons/uv.svg';

import { formatApiDate } from '@utils/date';
import { COLORS } from '@styles/colors';

import Accordion from '@molecules/Accordion';
import Spacer from '@atoms/Spacer';
import Dropdown from '@atoms/Dropdown';
import CustomText from '@atoms/CustomText';
import { ContainerHeader, ContainerTitulo, Row } from './styles';

interface IHomeScreenProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>('Santos');
  const [dadosCidade, setDadosCidade] = useState<ICidadeDados[] | undefined>();
  const [error, setError] = useState<string | undefined>();
  const cidades = useMemo(WeatherService.ListaCidades, []);

  const getColor = (value: number) => {
    if (value <= 2) {
      return COLORS.success;
    }

    if (value <= 5) {
      return COLORS.warning;
    }

    if (value <= 7) {
      return COLORS.orange;
    }

    if (value <= 10) {
      return COLORS.danger;
    }

    if (value >= 11) {
      return COLORS.purple;
    }
  };

  useEffect(() => {
    setDadosCidade(undefined);

    const cidade = cidades.find(c => c.nome === cidadeSelecionada);
    if (cidade) {
      WeatherService.ListaInfosCidadeAtual(cidade)
        .then(({ data }) => {
          WeatherService.ListaInfosCidadePrevisao(cidade)
            .then(res => {
              setDadosCidade([data, ...res.data]);
              setError(undefined);
            })
            .catch(err => {
              console.error(err.response);
              setError('Falha ao carregar dados.');
            });
        })
        .catch(err => {
          console.error(err.response);
          setError('Falha ao carregar dados.');
        });
    }
  }, [cidadeSelecionada]);

  const renderItem = ({
    item,
    index,
  }: {
    item: ICidadeDados;
    index: number;
  }) => {
    if (index === 0) {
      return <></>;
    }

    return (
      <Row>
        <Accordion
          widthPercentage={64}
          content={
            <CustomText size={18} color="secondary" bold>
              {formatApiDate(item.date)}
            </CustomText>
          }
        />
        <Accordion
          widthPercentage={34}
          content={
            <CustomText size={18} color={getColor(item.value)} bold>
              {item.value}
            </CustomText>
          }
        />
      </Row>
    );
  };

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'center' }}
      source={require('../../assets/images/background2.png')}>
      {dadosCidade ? (
        <>
          <ContainerHeader>
            <ContainerTitulo>
              <UvIcon width={36} height={45} />

              <Spacer right={4} />

              <CustomText size={26} color="#ffffff" bold>
                Índice Ultravioleta
              </CustomText>

              <Spacer left={4} />

              <UvIcon width={36} height={45} />
            </ContainerTitulo>

            <Spacer top={16} />

            <Dropdown
              placeholder="Busca por região"
              items={cidades.map(cidade => ({
                label: cidade.nome,
                value: cidade.nome,
              }))}
              value={cidadeSelecionada}
              setValue={setCidadeSelecionada}
            />

            <Spacer top={36} />

            <CustomText size={24} color="#ffffff" center bold>
              Hoje
            </CustomText>

            <Row>
              <Accordion
                widthPercentage={64}
                content={
                  <CustomText size={18} color="secondary" bold>
                    {formatApiDate(dadosCidade[0].date)}
                  </CustomText>
                }
              />
              <Accordion
                widthPercentage={34}
                content={
                  <CustomText
                    size={18}
                    color={getColor(dadosCidade[0].value)}
                    bold>
                    {dadosCidade[0].value}
                  </CustomText>
                }
              />
            </Row>
          </ContainerHeader>

          <CustomText size={24} color="#ffffff" center bold>
            Próximos dias
          </CustomText>

          <Spacer top={-20} />

          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, padding: 20 }}
            data={dadosCidade}
            renderItem={renderItem}
          />
        </>
      ) : (
        !error && <ActivityIndicator size="large" color="#ffffff" />
      )}

      {error && (
        <CustomText size={16} color="#ffffff" center bold>
          {error} Por favor, tente novamente.
        </CustomText>
      )}
    </ImageBackground>
  );
};

export default HomeScreen;
