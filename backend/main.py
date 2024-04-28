import psutil
import json
from flask import Flask, jsonify
from flask_cors import CORS
import platform
import os
import socket

app = Flask(__name__)

# CORS configuration
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000", "*"]}})

@app.route('/computer-stats', methods=['GET'])
def get_computer_stats():
    cpu_usage = psutil.cpu_percent(interval=1)
    memory_usage = psutil.virtual_memory().percent
    disk_usage = psutil.disk_usage('/').percent
    network_usage = psutil.net_io_counters()
    battery_percentage = psutil.sensors_battery().percent
    cpu_frequency = psutil.cpu_freq().current
    boot_time = psutil.boot_time()



    stats = []
    
    stats.append(cpu_usage)
    stats.append(memory_usage)
    stats.append(disk_usage)
    stats.append(battery_percentage)
    stats.append(boot_time)

    return jsonify(stats)



@app.route('/system-info', methods=['GET'])
def get_system_info():
    system_info = platform.uname()
    ip_address = socket.gethostbyname(socket.gethostname())

    system_info_total = []
    system_info_total.append(system_info)
    system_info_total.append(ip_address)

    print(system_info_total)
    
    return jsonify(system_info_total)



if __name__ == '__main__':
    app.run(debug=True)
