import javax.swing.*;
import java.awt.*;
import java.io.*;

class GuiApp {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Startup");

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(1000, 1000);
        frame.setVisible(true);

        JButton fullStart = new JButton("Full Start Options");
        JButton debugStart = new JButton("Debug Start Options");

        fullStart.setPreferredSize(new Dimension(250, 250));
        debugStart.setPreferredSize(new Dimension(250, 250));

        debugStart.addActionListener(e -> {
            frame.setVisible(false);

            JFrame fullStartFrame = new JFrame("Full Start Options");

            fullStartFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            fullStartFrame.setSize(1000, 1000);
            fullStartFrame.setVisible(true);

            JButton jsStartOnly = new JButton("JS only");

            jsStartOnly.setPreferredSize(new Dimension(250, 250));

            jsStartOnly.addActionListener(e1 -> {
                try {
                    Runtime.getRuntime().exec("cmd.exe /k start cmd.exe /k start s.cmd");
                    System.out.println(("Working"));
                    fullStartFrame.setVisible(false);
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            });

            fullStartFrame.add(jsStartOnly);
            fullStartFrame.setLayout(new FlowLayout());
            fullStartFrame.setVisible(true);
        });

        frame.add(fullStart);
        frame.add(debugStart);
        frame.setLayout(new FlowLayout());
        frame.setVisible(true);
    }
}