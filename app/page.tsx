import { Container, Filters, Title, Topbar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <Topbar />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-15">
          {/* Фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16 ">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Бургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
