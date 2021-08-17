from flask import (Flask, render_template, request, flash, session, redirect, jsonify, url_for, abort)

@app.route("/")
def index():
    """View homepage with React components"""

    return render_template("index.html")