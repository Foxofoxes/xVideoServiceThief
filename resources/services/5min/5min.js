/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.2";
	this.minVersion = "2.0.0a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://www.5min.com/";
	this.ID = "5min.com";
	this.caption = "5min";
	this.adultContent = false;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	// init result
	var result = new VideoDefinition();
	// download webpage
	var http = new Http();
	var html = http.downloadWebpage(url);
	// get video title
	result.title = copyBetween(html, '<h1 class="videoTitle">', '</h1>');
	// get video url
	result.URL = copyBetween(html, "videoUrl=", "&");
	result.URL = strReplace(result.URL, "%3a", ":");
	result.URL = strReplace(result.URL, "%2f", "/");
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x02,0x03,0x00,0x00,0x00,0x62,0x9d,0x17,
		0xf2,0x00,0x00,0x00,0x09,0x50,0x4c,0x54,0x45,0xff,0xff,0x00,0x00,0x00,0x00,0x81,
		0x81,0x00,0x2e,0x08,0x3b,0xd0,0x00,0x00,0x00,0x29,0x49,0x44,0x41,0x54,0x08,0x5b,
		0x63,0x60,0x40,0x03,0x5c,0x2b,0x80,0x04,0x6b,0x08,0x90,0x50,0x61,0x80,0x11,0xa2,
		0x11,0x20,0xd6,0x14,0x10,0x53,0x04,0x88,0x35,0x40,0x84,0x18,0x88,0xab,0x1a,0x80,
		0xae,0x1d,0x00,0x99,0xcb,0x03,0xe8,0x43,0xc5,0x69,0xb6,0x00,0x00,0x00,0x00,0x49,
		0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}
