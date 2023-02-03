import { useNavigate } from "react-router-dom";
import { PetShopCardButton } from "./styles";

export type CardProps = {
  id: string;
  name: string;
  theme: string;
  color: string;
};

export function ClassroomCard({ id, name, theme, color }: CardProps) {
  const navigate = useNavigate();

  return (
    <PetShopCardButton
      backgroundColor={color}
      onClick={() => {
        navigate("/classroom/" + id);
      }}
    >
      <h2>{name}</h2>
      <h3>{theme}</h3>
    </PetShopCardButton>
  );
}