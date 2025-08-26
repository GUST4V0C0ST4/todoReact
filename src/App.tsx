import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg"

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Ola mundo!
        </Text>
        <Text className="text-green-base">Ola mundo!</Text>
        <Text variant="body-md-bold">Ola mundo!</Text>
        <Text>Levar o dog pra passear</Text>
      </div>

      <div className="flex gap-1">
        <img src={TrashIcon} />
      </div>
    </div>
  );
}
