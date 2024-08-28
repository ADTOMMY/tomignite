個人サイト「Tomignite！」の資源をローカルからGitへ移動した。

追加実装は下記ツールを用いて実施する。
・Chocolatey

・Chocolatey インストール( https://chocolatey.org/install )

  Individual（個人）を選択（デフォルト）して管理者権限でPowerShellを起動、「Now run the following command:」の下に書いてあるコマンドをコピー。

  chocoコマンドを有効化し、Windowsアプリを安全にダウンロードする。（インストール後の確認） 
   > choco --version

・volta インストール（Node.jsのバージョン切替ツール）
  公式サイト(  )からmsiインストーラをダウンロード
  （インストール後の確認）  
  > volta --version

・Node.js インストール
　（voltaでインストールする）
   > volta install node@22.5.1/

（voltaがインストールしたnodeコマンド、npmコマンドを使用できることの確認）
 　> node --version
   > npm --version

・vscode
  Chocoコマンドでインストール
  > choco install vscode
  
  vscodeの拡張機能で以下をインストール
  
    Prettier
    
    ESLint
    
    Todo Tree
