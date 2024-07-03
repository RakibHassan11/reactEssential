import { useState } from 'react';


import { CORE_CONCEPTS } from './data';
import Header from './componenets/Header/Header';
import CoreConcept from './componenets/CoreConcept';
import TabButton from './componenets/TabButton';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic]= useState('components');

  function handleSelect(selectedButton){
    //selectedButton =>'componenets','jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}
  console.log('App component executing');

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = (
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>

    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() =>handleSelect('components')}>Componeents</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}  onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'}  onSelect={() =>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'}  onSelect={() =>handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;