import requests
api_url = "https://jsonplaceholder.typicode.com/todos/1"
response = requests.get(api_url)
json = response.json()
print(json)
input()