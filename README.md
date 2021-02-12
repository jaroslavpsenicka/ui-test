## Setup
```
git clone https://github.com/jaroslavpsenicka/ui-test.git
cd ui-test
yarn install
yarn test
yarn start
```
## Struktura projektu
Projekt byl vygnerovaný pomocí `npx create-react-app ui-test --template redux`
```
<root>
 + public             -- veřejné zdroje
 + src                
   + __snapshots__    -- snapshoty enzyme testů
   + components       -- komponenty
   + redux            -- store, reducery apod.
   + services         -- přístup k API
```
## Použité knihovny
Kromě standardních knihoven je navíc
* redux-thunk -- redux middleware
* enzyme -- podpora testování

## Store
Store obsahuje následující položky (state)
* form -- data formuláře
* submit -- informace o ne/úspěšném odeslání formuláře 
* data -- data načtená ze služby ~/data

## Flow odeslání dat 
Podstatná logika je v middleware:
```
export const submitForm = (data) => dispatch => {
  dispatch({ type: SUBMIT_FORM_REQUEST, payload: data })
  const service = new DataService()
  return service.uploadNameAndHeight(data.name, data.height)
    .then(uploadId => service.uploadFiles(uploadId, data.file[0]))
    .then(() => {
      dispatch({ type: SUBMIT_FORM_SUCCESS, payload: data })
      dispatch(getData())})
    .catch(err => dispatch({ type: SUBMIT_FORM_ERROR, payload: err }))
}
```
a v obsluze API, např. odeslání jména a výšky:
```
  uploadNameAndHeight = (name, height) => {
    const config = {
      method: 'POST',
      headers: { 'cache-control': 'no-cache', 'content-type': 'application/json' },
      body: JSON.stringify({ name, height })
    }
    return new Promise((resolve, reject) => {
      fetch(`${SERVICE_URL}/submit`, config)
        .then(response => response.json())
        .then(data => resolve(data.uploadId))
        .catch(err => reject(err))
    })
  }
```
## Alternativní řešení
V jednoduchém případě jako je tento by asi dostačovalo použití Context API, které by drželo načtená data a publikovalo metodu pro reload dat. Tuto by pak volal synchronně formulář.
   
