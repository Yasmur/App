import React from 'react';
import './App.scss';
import HeroBlock from "./Components/HeroBlock/HeroBlock";
import gcLogo from "./assets/GC 2.svg";
import ITNLogo from "./assets/ITN_mix 1.svg";
import shidLogo from "./assets/shid_emozhl_logo_white 1.svg";
import Facts from "./Components/Facts/Facts";
import SectorsList from "./Components/SectorsList/SectorList";
import useSreenSize from "./utils/useScreenSize";
import Footer from './Components/Footer/Footer'
import AirQuality from "./Components/AirQuality/AirQuality"


function App() {
  
  const partners = [
    shidLogo,
    ITNLogo,
    gcLogo
  ]
  
  const navLinks = [
    {
      title: "Основные факты",
      href: "#facts"
    },
    {
      title: "Индекс качества воздуха",
      href: "#index"
    },
    {
      title: "Политика по уменьшению загрязнений",
      href: "#politics"
    }
  ]

  const factsSlides = [
    {
      id: '1001' ,
      imgUrl: require("./assets/facts-slider/slide-1.jpg"),
      desc: "Женщины и дети - главные жертвы загрязнения воздуха"
    },
    
    {
      id: '1002' ,
      imgUrl: require("./assets/facts-slider/slide-2.jpg"),
      desc: "Защитники окружающей среды подвергаются преследованиям"
    },

    {
      id: '1003' ,
      imgUrl: require("./assets/facts-slider/slide-3.jpg"),
      desc: "Загрязнения воздуха - нарушение прав человека"
    },

    {
      id: '1004' ,
      imgUrl: require("./assets/facts-slider/slide-4.jpg"),
      desc: "4.2 миллиона случаев преждевременной смерти людей из-за загрязнения атфмосферного воздуха"
    },

    {
      id: '1005' ,
      imgUrl: require("./assets/facts-slider/slide-5.jpg"),
      desc: "Согласно оценкам, суммарный объем затрат в вязи с загрязнением воздуха превышает 5 трлн долл в год"
    }
  ]

  const sectors = [
    {
      name: "Промышленность",
      imgUrl: require('./assets/sectors/industry.jpg'),
      description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
    },
    {
      name: "Транспорт",
      imgUrl: require('./assets/sectors/transport.jpg'),
      description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
    },
    {
      name: "Городское планирование",
      imgUrl: require('./assets/sectors/sity_planing.jpg'),
      description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
    },
    {
      name: "Энергия",
      imgUrl: require('./assets/sectors/energy.jpg'),
      description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
    },
    {
      name: "Энергетика",
      imgUrl:  require('./assets/sectors/energetics.jpg'),
      description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
    },
    {
      name: "Утилизация отходов",
      imgUrl:  require('./assets/sectors/utilisation.jpg'),
      description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
    },
  ];
  const author = "Алексеем Андрюхиным";
  const designer = "Валерией Бубырь";
  return (
   <>
   <HeroBlock title="Качество атмосферного воздуха и здоровье" 
   logos={partners}
   links={navLinks}/>
   <Facts title="Основные факты" slides={factsSlides}/>
   <AirQuality/>
   <SectorsList title="Политика по уменьшению загрязнений" subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
   items={sectors}/>
   <Footer links={navLinks} partners={partners} author={author} designer={designer}/>
   </>
  );
}

export default App;
