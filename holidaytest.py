import requests, datetime
key = "e490c372-ed46-4762-8b3d-6af65625f3f3"



today = datetime.date.today().isoformat()
today = '2019' + today[4:]
print(today)


holidays = requests.get("https://fun-holiday-api.herokuapp.com/api/today")
print(holidays.json())
