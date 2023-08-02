import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as l,a,b as n,d as i,e as c}from"./app-6b0ccc17.js";const r={},u=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"TIP"),n("p",null,"用于表单的高级查询功能")],-1),k=n("h2",{id:"_1-使用示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-使用示例","aria-hidden":"true"},"#"),i(" 1.使用示例")],-1),d=c(`<details class="hint-container details"><summary>高级查询示例代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rx-super-condition</span>
    <span class="token attr-name">localKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:titleList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>titleList<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:templateList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>templateList<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:deleteTemFunc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delTemplate<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:enumList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testkey<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rx-super-condition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;RxSuperConditionTest&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    RxSuperCondition
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> testValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2000-01-01&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> testkey <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">test1</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//传递了所有属性</span>
    <span class="token keyword">const</span> titleList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_name</span><span class="token operator">:</span> <span class="token string">&#39;测试11111111111111111111111111111111111111111111111111111111111111111111&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_name</span><span class="token operator">:</span> <span class="token string">&#39;测试2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_name</span><span class="token operator">:</span> <span class="token string">&#39;测试3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;time&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_name</span><span class="token operator">:</span> <span class="token string">&#39;测试4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;enum&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_name</span><span class="token operator">:</span> <span class="token string">&#39;测试5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">//用于渲染条件的数据结构</span>
    <span class="token keyword">const</span> templateList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试模板1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">is_group</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">logical</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">is_group</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid3&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;test1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">operate</span><span class="token operator">:</span> <span class="token string">&#39;A003&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">is_group</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid4&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">logical</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">is_group</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid5&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;test1&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">operate</span><span class="token operator">:</span> <span class="token string">&#39;A003&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">is_group</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">uuid</span><span class="token operator">:</span> <span class="token string">&#39;uid6&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">condition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;test1&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">operate</span><span class="token operator">:</span> <span class="token string">&#39;A003&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">data_type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">]</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">delTemplate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      submit<span class="token punctuation">,</span>
      testValue<span class="token punctuation">,</span>
      delTemplate<span class="token punctuation">,</span>
      titleList<span class="token punctuation">,</span>
      testkey<span class="token punctuation">,</span>
      templateList
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_2-类型" tabindex="-1"><a class="header-anchor" href="#_2-类型" aria-hidden="true">#</a> 2.类型</h2><p>1.prop titleList 类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token doc-comment comment">/**
   *  string 文本
      number 数值
      enum 枚举
      time  日期
      budget 预算
   */</span>
  <span class="token keyword">type</span> <span class="token class-name">dataTypeEnum</span> <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;enum&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;time&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;budget&#39;</span>
  <span class="token keyword">type</span> <span class="token class-name">titleType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span>   <span class="token comment">//属性的英文名</span>
      show_name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//属性的显示名</span>
      data_type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span> <span class="token comment">//属性的类型</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">type</span> <span class="token class-name">titleListTypes</span> <span class="token operator">=</span> titleType<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.prop templateList 类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
   is_group<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">//是否为条件组</span>
   logical<span class="token operator">?</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 是且还是或 1且 2或</span>
   uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">//随机id</span>
   children<span class="token operator">?</span><span class="token operator">:</span> Condition<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//条件组中的子条件</span>
   target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">//选中的属性</span>
   operate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">//条件中选中的符号</span>
   data_type<span class="token operator">?</span><span class="token operator">:</span> dataTypeEnum<span class="token punctuation">;</span> <span class="token comment">//属性的类型</span>
   value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//条件筛选的值</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">interface</span> <span class="token class-name">TemplateItem</span> <span class="token punctuation">{</span>
   name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
   uuid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
   condition<span class="token operator">:</span> Condition<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TemplateList</span> <span class="token operator">=</span> TemplateItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.prop enumListTypes</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">enumDataItem</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">enumListTypes</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> enumDataItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-组件props属性" tabindex="-1"><a class="header-anchor" href="#_3-组件props属性" aria-hidden="true">#</a> 3.组件props属性</h2>`,9);function v(m,b){const p=s("RxSunperConditionDemo"),t=s("RxSunperConditionApi");return o(),l("div",null,[u,k,a(p),d,a(t)])}const _=e(r,[["render",v],["__file","RxSuperCondition.html.vue"]]);export{_ as default};
