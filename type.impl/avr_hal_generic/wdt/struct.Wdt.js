(function() {var type_impls = {
"atmega_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Wdt%3CH,+WDT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#63\">source</a><a href=\"#impl-Wdt%3CH,+WDT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, WDT&gt; <a class=\"struct\" href=\"avr_hal_generic/wdt/struct.Wdt.html\" title=\"struct avr_hal_generic::wdt::Wdt\">Wdt</a>&lt;H, WDT&gt;<div class=\"where\">where\n    WDT: <a class=\"trait\" href=\"atmega_hal/wdt/trait.WdtOps.html\" title=\"trait atmega_hal::wdt::WdtOps\">WdtOps</a>&lt;H&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.new\" class=\"fn\">new</a>(p: WDT, m: &amp;&lt;WDT as <a class=\"trait\" href=\"atmega_hal/wdt/trait.WdtOps.html\" title=\"trait atmega_hal::wdt::WdtOps\">WdtOps</a>&lt;H&gt;&gt;::<a class=\"associatedtype\" href=\"atmega_hal/wdt/trait.WdtOps.html#associatedtype.MCUSR\" title=\"type atmega_hal::wdt::WdtOps::MCUSR\">MCUSR</a>) -&gt; <a class=\"struct\" href=\"avr_hal_generic/wdt/struct.Wdt.html\" title=\"struct avr_hal_generic::wdt::Wdt\">Wdt</a>&lt;H, WDT&gt;</h4></section><section id=\"method.start\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#69\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.start\" class=\"fn\">start</a>(&amp;mut self, timeout: <a class=\"enum\" href=\"atmega_hal/wdt/enum.Timeout.html\" title=\"enum atmega_hal::wdt::Timeout\">Timeout</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>&gt;</h4></section><section id=\"method.feed\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#73\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.feed\" class=\"fn\">feed</a>(&amp;mut self)</h4></section><section id=\"method.stop\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#77\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.stop\" class=\"fn\">stop</a>(&amp;mut self)</h4></section></div></details>",0,"atmega_hal::wdt::Wdt"]],
"attiny_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Wdt%3CH,+WDT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#63\">source</a><a href=\"#impl-Wdt%3CH,+WDT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H, WDT&gt; <a class=\"struct\" href=\"avr_hal_generic/wdt/struct.Wdt.html\" title=\"struct avr_hal_generic::wdt::Wdt\">Wdt</a>&lt;H, WDT&gt;<div class=\"where\">where\n    WDT: <a class=\"trait\" href=\"attiny_hal/wdt/trait.WdtOps.html\" title=\"trait attiny_hal::wdt::WdtOps\">WdtOps</a>&lt;H&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.new\" class=\"fn\">new</a>(p: WDT, m: &amp;&lt;WDT as <a class=\"trait\" href=\"attiny_hal/wdt/trait.WdtOps.html\" title=\"trait attiny_hal::wdt::WdtOps\">WdtOps</a>&lt;H&gt;&gt;::<a class=\"associatedtype\" href=\"attiny_hal/wdt/trait.WdtOps.html#associatedtype.MCUSR\" title=\"type attiny_hal::wdt::WdtOps::MCUSR\">MCUSR</a>) -&gt; <a class=\"struct\" href=\"avr_hal_generic/wdt/struct.Wdt.html\" title=\"struct avr_hal_generic::wdt::Wdt\">Wdt</a>&lt;H, WDT&gt;</h4></section><section id=\"method.start\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#69\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.start\" class=\"fn\">start</a>(&amp;mut self, timeout: <a class=\"enum\" href=\"attiny_hal/wdt/enum.Timeout.html\" title=\"enum attiny_hal::wdt::Timeout\">Timeout</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.unit.html\">()</a>&gt;</h4></section><section id=\"method.feed\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#73\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.feed\" class=\"fn\">feed</a>(&amp;mut self)</h4></section><section id=\"method.stop\" class=\"method\"><a class=\"src rightside\" href=\"src/avr_hal_generic/wdt.rs.html#77\">source</a><h4 class=\"code-header\">pub fn <a href=\"avr_hal_generic/wdt/struct.Wdt.html#tymethod.stop\" class=\"fn\">stop</a>(&amp;mut self)</h4></section></div></details>",0,"attiny_hal::wdt::Wdt"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()