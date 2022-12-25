from flask import Flask, render_template, request
import os

app = Flask(__name__, template_folder="static/template")
extAdmitidas = ('.mp4', '.mkv', '.avi', '.webm')

@app.route('/')
def fnIndex():
    # Obtén la lista de todos los archivos de video en el directorio
    videos = [f for f in os.listdir('static/videos') if os.path.splitext(f)[1] in extAdmitidas]
    return render_template('index.html', videos=videos)

@app.route('/privada', methods=['GET', 'POST'])
def fnPrivada():
    password = request.form['password']
    # Comprueba si la contraseña es correcta
    if password == 'password':  # Deja en blanco la contraseña por ahora
        # Obtén la lista de todos los archivos de video en el directorio privado
        videos = [f for f in os.listdir('static/videosPrivados') if os.path.splitext(f)[1] in extAdmitidas]
        return render_template('privado.html', videos=videos)
    else:
        return 'Contraseña incorrecta'

if __name__ == '__main__':
    app.run(port=80, host='127.0.0.2', threaded=True)
