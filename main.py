from flask import Flask, render_template, request
import os

app = Flask(__name__,template_folder="static/template")

@app.route('/')
def index():
    # Obtén la lista de todos los archivos de video en el directorio
    extensiones_admitidas = ('.mp4','.mpg', '.mkv', '.avi', '.webm')
    videos = [f for f in os.listdir('static/videos') if os.path.splitext(f)[1] in extensiones_admitidas]
    return render_template('index.html', videos=videos)

if __name__ == '__main__':
    app.run(port=80, host='127.0.0.2',threaded=True)
