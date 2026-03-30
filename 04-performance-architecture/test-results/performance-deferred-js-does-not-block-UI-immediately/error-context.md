# Page snapshot

```yaml
- main [ref=e3]:
  - heading "React Performance Architecture Lab" [level=1] [ref=e4]
  - navigation [ref=e5]:
    - button "Rendering" [ref=e6]
    - button "Memoization" [ref=e7]
    - button "Computation" [ref=e8]
    - button "Network" [ref=e9]
    - button "Images (LCP)" [ref=e10]
    - button "Fonts (FCP)" [ref=e11]
    - button "Code Splitting" [ref=e12]
    - button "Deferred JS" [active] [pressed] [ref=e13]
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "Deferred JS" [level=2] [ref=e17]
      - paragraph [ref=e18]: Blocking main thread vs deferring work
      - paragraph [ref=e19]: Deferred version keeps UI responsive
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Main Thread Blocked" [level=3] [ref=e22]
        - button "Run Blocking JS" [ref=e23]
        - status [ref=e24]: "Status: Idle"
        - generic [ref=e25]:
          - paragraph [ref=e26]: "Time: 0 ms"
          - paragraph [ref=e27]: "Renders: 2"
      - generic [ref=e28]:
        - heading "Deferred Execution" [level=3] [ref=e29]
        - button "Run Deferred JS" [ref=e30]
        - status [ref=e31]: "Status: Idle"
        - generic [ref=e32]:
          - paragraph [ref=e33]: "Time: 0 ms"
          - paragraph [ref=e34]: "Renders: 2"
```