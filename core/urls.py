from django.shortcuts import render, redirect
from django.urls import path
from django.views.generic import TemplateView as T
from .utils import react_page

def auth_only(page: "react_filename"=None, redirect_to: str=""):
    """
    Render page if is logged in, else, redirect to another
    TODO implement auth checking
    """
    return lambda request: redirect(to=redirect_to)

urlpatterns = [
    # path("", auth_only(redirect_to="pages/main.tsx")),
    path("", auth_only(redirect_to="/login")),
    path("login", react_page("pages/auth/login.tsx")),
    path("register", react_page("pages/auth/register.tsx")),
]
