---
layout: education
title: Btech Minor Programs
link: HOME / ACADEMICS
des: The Minor Programs in Artificial Intelligence (AI) and Data Science (DS) at the School of Artificial Intelligence and Data Science (AIDE) offer undergraduate students pursuing Bachelor of Technology (B.Tech) degrees the opportunity to gain specialized knowledge and skills in these rapidly growing fields. These minor programs complement students' primary areas of study and prepare them for diverse career opportunities in AI and DS.
permalink: /btech/
---
{% capture content-col %}

# BTech Programs
The Minor Programs in AI and DS at AIDE are designed to provide BTech students with a foundational understanding of key concepts, techniques, and applications in AI and DS. These programs offer a blend of theoretical knowledge, practical skills, and hands-on experience through a combination of coursework, projects, and experiential learning opportunities.
{% endcapture %}

{% capture content-links %}

{% assign links_data = site.data.links %}
<ul class="side-news">
{% for mem in links_data %}
  {% if mem.page == 'btech' %}
    <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% endcapture %}

{% capture content-bottom %}

## The BTech program at present is designed to offer minor degrees in the following areas:

<div class="msgrid-container">
{% assign programs_data = site.data.programs  %}
{% for member in programs_data %}
{% if member.level == 'BTech' %}
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{member.background}}'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;">
{% if member.document != '' %}
<a href="{{ member.document }}" target="_blank" style="border: 0; text-decoration: none;">{{ member.name }}
</a>
{% else %}
<a href="{{ member.url }}" target="_blank" style="border: 0; text-decoration: none;">{{ member.name }}
</a>
{% endif %}
</h2>
<p><strong>Offered by:</strong> {{member.offered}}</p>
<p><strong>Convenor:</strong> {{member.coordinator}}</p>
</div>
</div>
{% endif %}
{% endfor %}
</div>

{% endcapture %}

<style>
/* page-banner image */
.background-about{
background-image: url("{{ site.baseurl }}/images/BTech.png");
}
</style>

{% include education2.html %}
