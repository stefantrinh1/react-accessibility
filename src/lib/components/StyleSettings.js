import React from 'react';
import HideImages from './ConfigComponents/HideImages';
import FontColor from './ConfigComponents/FontColor';
import styled from 'styled-components';
import SectionTitle from './TextContent/SectionTitle';
import FontSize from './ConfigComponents/FontSize';
import LineHeight from './ConfigComponents/LineHeight';
import LetterSpacing from './ConfigComponents/LetterSpacing';
import HighlightLinks from './ConfigComponents/HighlightLinks';
import TitleBackgroundColor from './ConfigComponents/TitleBackgroundColor';
import Monochrome from './ConfigComponents/Monochrome';
import HighlightTitles from './ConfigComponents/HighlightTitles';
import TextCase from './ConfigComponents/TextCase';
import TitleColor from './ConfigComponents/TitleColor';
import FontButtons from './ConfigComponents/FontButtons';
import HighContrast from './ConfigComponents/HighContrast';
import LowContrast from './ConfigComponents/LowContrast';

export default function StyleSettings() {
  return (
    <Container>
      <SectionTitle>General Text Styles</SectionTitle>
      <FontColor />
      <InlineSection>
        <FontSize />
        <LineHeight />
        <LetterSpacing />
        <TextCase />
        <FontButtons />
      </InlineSection>
      <SectionTitle>Title Styles</SectionTitle>
      <InlineSection>
        <TitleColor />
        <TitleBackgroundColor />
        <HighlightTitles />
      </InlineSection>
      <SectionTitle>Extra Setting</SectionTitle>
      <InlineSection>
        <HighlightLinks />
        <HideImages />
        <Monochrome />
        <HighContrast />
        <LowContrast />
      </InlineSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px 60px;
`;

const InlineSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
