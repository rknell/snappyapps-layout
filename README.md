SnappyApps Layout
===================

A fullscreen web app or mobile app layout engine for the web. It aims to solve complex issues around 100% height css strains, as well as providing headers and footers and abstracting away the more complex parts of flexbox including cross platform / browser issues.

###Installation

If you are using bower

```
bower install snappyapps-layout --save
```

Then include the css and javascript files in your project to get started

```
<link rel="stylesheet" src="css/snappyapps-layout.css">
<script src="js/snappyapps-layout.js">
```

###Usage

> Check out the examples folder for some common layouts and complete HTML

The first thing each app needs is an `sa-container` element. This element is a fixed, fullscreen element and is only used once per app. For example

```
<div class="sa-container"></div>
```

Once you have your sa-container, you need to create your first sa-layout element.

There are two basic options:

 - **Horizontal** - The layout wil tile left to right across the page
 - **Vertical** - The layout will tile top to bottom down the page

An example **3 column** horizontal layout, with two fixed columns on either side and a content section that will grow to fill the available space:
```
<div class="sa-container">
	<div class="sa-layout horizontal">
		<div>Left Column</div>
		<div class="grow">Content</div>
		<div>Right Column</div>
	</div>
</div>
```

Example **header footer layout** with content in the middle
```
<div class="sa-container">
	<div class="sa-layout vertical">
		<div>Header</div>
		<div class="grow">Content</div>
		<div>Footer</div>
	</div>
</div>
```

Now we can combine them, header footer layout with 3 columns

```
<div class="sa-container">
	<div class="sa-layout vertical">
		<div>Header</div>
		<div class="grow">
			<div class="sa-layout horizontal">
				<div>Left Column</div>
				<div class="grow">Content</div>
				<div>Right Column</div>
			</div>
		</div>
		<div>Footer</div>
	</div>
</div>
```
Viola!

The combinations can be combined infinitely to make some pretty complicated layouts. For example lets create a list, with a right aligned `>` indicating that it could be clicked:

```
<div class="sa-container">
	<div class="sa-layout vertical">
		<div>Header</div>
		<div class="grow">
			<div class="sa-layout horizontal">
				<div>Left Column</div>
				<div class="grow">
					<div class="sa-layout vertical">
						<div class="list-item sa-layout content-height horizontal">
							<div class="grow">Item 1 content</div>
							<div>></div>
						</div>
						<div class="list-item sa-layout content-height horizontal">
							<div class="grow">Item 2 content</div>
							<div>></div>
						</div>
						<div class="list-item sa-layout content-height horizontal">
							<div class="grow">Item 3 content</div>
							<div>></div>
						</div>
					</div>
				</div>
				<div>Right Column</div>
			</div>
		</div>
		<div>Footer</div>
	</div>
</div>
```
---
Helper classes
-------------

####grow
Based on flexbox's grow, an element with this class will grow to fill the available space in its container. If two items have `grow` they will share the space evenly. In the below example, grow has been used to right align the `>` to indicate the object can be clicked, such as in a mobile list

```
<div class="list-item sa-layout content-height horizontal">
	<div class="grow">Item 1 content</div>
	<div>></div>
</div>
```

####content-height
By default, all `sa-layout` elements will fill the height and the width of their container. If you want to make a list (as in the example above) or just want to use the alignment features, add `content-height` to your sa-layout element. For example

```
<div class="list-item sa-layout content-height horizontal">
	<div class="grow">Item 1 content</div>
	<div>></div>
</div>
```

####wrap & wrap-container
To make a series of objects automatically wrap when they fill the available space, use wrap and wrap container. This is useful when you have something like items for sale in a catalogue, or album art you want in a grid.
```
<div class='wrap-container grow'>
	<div class="sa-layout horizontal wrap content-height">
		<div>This will wrap</div>
		<div>This will wrap</div>
		<div>This will wrap</div>
		<div>This will wrap</div>
		<div>This will wrap</div>
		<div>This will wrap</div>
	</div>
</div>
```
> In the example above we use content height as well, this stops issues with scrolling just the wrapped content

####A note on scrolling
The system automatically scrolls all content that exceeds a container with its own scrollbar. As this is designed as an app layout system, each `sa-layout` element can potentially be its own, independent scrolling section.

---
##Browser Compatibility
SnappyApps-layout makes extensive use of flexbox. So if your target browsers will have trouble rendering flexbox then this project is probably not for you. Luckily ie and some versions of Android are the only browsers not fully supporting the specification at the time of writing. For more information (and probably more up-to-date info) check out Can I Use for flexbox:

http://caniuse.com/#feat=flexbox