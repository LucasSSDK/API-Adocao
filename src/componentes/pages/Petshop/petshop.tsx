import { useState } from 'react';
import { Select } from '../../atoms/select/select';

export function Petshop() {
  const [selectedPet, setPet] = useState<string>('pets');
  const [ selectedModule, setSelectModule ] = useState<string>();

  const options = ['Pets 1', 'Pets 2', 'Pets 3'];
  console.log(selectedPet);

  const module = ["Categoria 1", "Categoria 2", "Categoria 3"];

  function resultSelect(value: string) {
    setSelectModule(value);

    console.log(selectedModule);
  }

  const PetsCategoria1 = [ "Papagaio", "Periquito", "Tucano", "Calopsita"]; 

  const PetsCategoria2 = [ "Porquinho da india", "Esquilo", "Preá", "Ramister" ]

  console.log(selectedPet);

  return (
    <div>
      <h2>Petshop</h2>
      <Select options={options} selectedOption={setPet} />
      <Select options={module} selectedOption={resultSelect} />
      {selectedModule == "Categoria 1" && (
       <>

       </> 
      )}
    </div>
  );
}
