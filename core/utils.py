from django.shortcuts import render


def react_page(react_filename: str, context: dict={}):
    """
    Renders the react page component with the given context
    """
    return lambda request: render(request, "partials/_react-page.html", context={"react_filename": react_filename, "context": context})