---
layout: joinUs
title: Admissions
link: HOME / JOIN US
des: Join SAIDE for a transformative learning experience in complex systems science.
permalink: /admissions/
---

<div id="parent-box">

<div class="general-section">

<h1 style="text-transform: none;">Admissions at School of Artificial Intelligence & Data Science</h1>
<div class="row">
<div class="col-md-9">
<p>IIT Jodhpur invites applications for admission to various programs in specific disciplines and interdisciplinary areas. </p>
</div>
</div>
</div>

<div class="application-section">
<div class="table-container">
<table id="admissionTable">
<thead>
<tr>
<th style="text-align:left">Programs</th>
<th>Curriculum</th>
<th>Application Deadline</th>
<th>Application Link</th>
</tr>
</thead>
<tbody id="admissions-table">
{% assign programs_data_unsorted = site.data.programs %}
{% assign programs_data = programs_data_unsorted | sort: "name" | reverse %}
{% for member in programs_data %}
<tr>
<td style="text-align:left">{{ member.name }}</td>
<td><a href="{{ member.document }}" target="_blank" class="view-more" style="border:0;">View More</a></td>
<td>{{ member.deadline }}</td>
<td><a href="{{ member.application }}" target="_blank" class="apply-now" style="border:0;text-decoration:none;"><i class="fa-regular fa-hand-point-right"></i> Apply Now</a></td>
</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>
<style>
  /* page-banner image */
  .background-about {
    background-image: url("{{ site.baseurl }}/images/Admissions.png");
  }

</style>
