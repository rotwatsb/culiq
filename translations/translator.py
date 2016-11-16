import requests

key = 'trnsl.1.1.20161116T153545Z.e961e18d78c0fa74.a09e11e9bb5b1ac9b5e5c5025d6ee485260e03d6'

base_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

def make_url(base_url, params):
    if params:
        params_string = '&'.join(['='.join([str(k), str(v)])
                                 for k, v in params.items()])
        return ''.join([base_url, '?', params_string])
    else:
        return base_url

def translate(text, from_lang):
    params = {'key': key, 'text': text, 'lang': from_lang + '-en'}
    url = make_url(base_url, params)
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()['text'][0]
    return 'Could not translate \'' + text + '\': ' + response.text
    
