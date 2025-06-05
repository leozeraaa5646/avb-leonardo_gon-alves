import ItemCard from "../../Components/ItemCard";

export const Home = () => {
  const items = [
    { id: 1, nome: 'Item 1', descricao: 'Descrição do item 1' },
    { id: 2, nome: 'Item 2', descricao: 'Descrição do item 2' },
    { id: 3, nome: 'Item 3', descricao: 'Descrição do item 3' },
  ];


  return (
    <div className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold mb-4">Itens</h1>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};




