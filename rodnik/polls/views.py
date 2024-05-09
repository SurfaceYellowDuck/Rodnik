from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.http import Http404

def index(request):
    from .models import Times  # Импорт модели внутри функции
    times_list = Times.objects.all()
    template = loader.get_template("polls/index.html")
    context = {
        "times_list": times_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, question_id):
    from .models import Times 
    question = get_object_or_404(Times, pk=question_id)
    return render(request, "polls/detail.html", {"times": question})


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)