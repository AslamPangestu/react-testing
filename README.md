# React Testing

- render: untuk meload ui
- screen: untuk mencari sesuatu dalam render

Search Type
- Text(<p>,<div>,dkk) -> getByText('')
- Label(<label>) -> getByLabelText('')
- Placeholder(<input placeholder="">) -> getByPlaceholderText('')
- Alternate Text(<img alt="">) -> getByAltText('')
- Display Value(<input value="">) -> getByDisplayValue('')
- Role(<button>,<input>,<body>) -> getByRole('')
- Test ID(<div test-id="">) -> getByTestId('')

Search Variant
- getBy -> cari data dan harus dapat
- queryBy -> cari data. jika tidak dapat akan dihasilkan null
- findBy -> cari data secara async
